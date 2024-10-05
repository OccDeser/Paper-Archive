# Asiacrypt[2023-6]
## Amortized Bootstrapping Revisited: Simpler, Asymptotically-Faster, Implemented.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#amortized-bootstrapping-revisited-simpler-asymptotically-faster-implemented)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#amortized-bootstrapping-revisited-simpler-asymptotically-faster-implemented)
### Authors
* Antonio Guimarães, Institute of Computing, University of Campinas, Campinas, Brazil
* Hilder V. L. Pereira, Institute of Computing, University of Campinas, Campinas, Brazil
* Barry van Leeuwen, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> Micciancio and Sorrel (ICALP 2018) proposed a bootstrapping algorithm that can refresh many messages at once with sublinearly many homomorphic operations per message. However, despite the attractive asymptotic cost, it is unclear if their algorithm could ever be practical, which reduces the impact of their results. In this work, we follow their general framework, but propose an amortized bootstrapping procedure that is conceptually simpler and asymptotically cheaper. We reduce the number of homomorphic multiplications per refreshed message from \(O(3^\rho \cdot n^{1/\rho } \cdot \log n)\) to \(O(\rho \cdot n^{1/\rho })\), and the noise overhead from \(\widetilde{O}(n^{2 + 3 \cdot \rho })\) to \(\widetilde{O}(n^{1 + \rho })\), where n is the security level and \(\rho \ge 1\) is a free parameter. We also make it more general, by handling non-binary messages and applying programmable bootstrapping. To obtain a concrete instantiation of our bootstrapping algorithm, we describe a double-CRT (aka RNS) version of the GSW scheme, including a new operation, called shrinking, used to speed-up homomorphic operations by reducing the dimension and ciphertext modulus of the ciphertexts. We also provide a C++ implementation of our algorithm, thus showing for the first time the practicability of the amortized bootstrapping. Moreover, it is competitive with existing bootstrapping algorithms, being even around 3.4 times faster than an equivalent non-amortized version of our bootstrapping.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_1](https://doi.org/10.1007/978-981-99-8736-8_1)
## Rotation Key Reduction for Client-Server Systems of Deep Neural Network on Fully Homomorphic Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#rotation-key-reduction-for-client-server-systems-of-deep-neural-network-on-fully-homomorphic-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#rotation-key-reduction-for-client-server-systems-of-deep-neural-network-on-fully-homomorphic-encryption)
### Authors
* Joon-Woo Lee, School of Computer Science and Engineering, Chung-Ang University, Seoul, Republic of Korea
* Eunsang Lee, Department of Software, Sejong University, Seoul, Republic of Korea
* Young-Sik Kim, Department of Electrical Engineering and Computer Science, DGIST, Daegu, Republic of Korea
* Jong-Seon No, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Republic of Korea
### Abstract
> In this paper, we propose a new concept of hierarchical rotation key for homomorphic encryption to reduce the burdens of the clients and the server running on the fully homomorphic encryption schemes such as Cheon-Kim-Kim-Song (CKKS) and Brakerski/Fan-Vercauteran (BFV) schemes. Using this concept, after the client generates and transmits only a small set of rotation keys to the server, the server can generate any required rotation keys from the public key and the smaller set of rotation keys that the client sent. This proposed method significantly reduces the communication cost of the client and the server, and the computation cost of the client. For example, if we implement the standard ResNet-18 network for the ImageNet dataset with the CKKS scheme, the server requires 617 rotation keys. It takes 145.1 s for the client with a personal computer to generate whole rotation keys and the total size is 115.7 GB. If we use the proposed two-level hierarchical rotation key system, the size of the rotation key set generated and transmitted by the client can be reduced from 115.7 GB to 2.91 GB (\(\times \)1/39.8), and the client-side rotation key generation runtime is reduced from 145.1 s to 3.74 s (\(\times \)38.8 faster) without any changes in any homomorphic operations to the ciphertexts. If we use the three-level hierarchical rotation key system, the size of the rotation key set generated and transmitted by the client can be further reduced from 1.54 GB (\(\times \)1/75.1), and the client-side rotation key generation runtime is further reduced to 1.93 s (\(\times \)75.2 faster) with a slight increase in the key-switching operation to the ciphertexts and further computation in the offline phase.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_2](https://doi.org/10.1007/978-981-99-8736-8_2)
## Homomorphic Polynomial Evaluation Using Galois Structure and Applications to BFV Bootstrapping.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#homomorphic-polynomial-evaluation-using-galois-structure-and-applications-to-bfv-bootstrapping)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#homomorphic-polynomial-evaluation-using-galois-structure-and-applications-to-bfv-bootstrapping)
### Authors
* Rachel Player, Royal Holloway, University of London, London, UK
* Simon Pohmann, Royal Holloway, University of London, London, UK
* Hiroki Okada, KDDI Research, Fujimino, Japan
### Abstract
> BGV and BFV are among the most widely used fully homomorphic encryption (FHE) schemes. Both schemes have a common plaintext space, with a rich algebraic structure. Our main contribution is to show how this structure can be exploited to more efficiently homomorphically evaluate polynomials. Namely, using Galois automorphisms, we present an algorithm to homomorphically evaluate a polynomial of degree d in only \(3\log (d)\) (in some cases only \(2\log (d)\)) many ciphertext-ciphertext multiplications and automorphism evaluations, where d is bounded by the ring degree. In other words, as long as the degree of the polynomial is bounded, we achieve an exponential speedup compared to the state of the art. In particular, the approach also improves on the theoretical lower bound of \(2\sqrt{d}\) many ciphertext-ciphertext multiplications, which would apply if automorphisms were not available.
> 
> We investigate how to apply our improved polynomial evaluation to the bootstrapping procedure for BFV, and show that we are able to significantly improve its performance. We demonstrate this by providing an implementation of our improved BFV bootstrapping using the Microsoft SEAL library. More concretely, we obtain a \(1.6\times \) speed up compared to the prior implementation given by Chen and Han (Eurocrypt 2018). The techniques are independent of, and can be combined with, the more recent optimisations presented by Geelen et al. (Eurocrypt 2023).
> 
> As an additional contribution, we show how the bootstrapping approach used in schemes such as FHEW and TFHE can be applied in the BFV context. In particular, we demonstrate that programmable bootstrapping can be achieved for BFV. Moreover, we show how this bootstrapping approach can be improved in the BFV context to make better use of the Galois structure. However, we estimate that its complexity is around three orders of magnitude slower than the classical approach to BFV bootstrapping.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_3](https://doi.org/10.1007/978-981-99-8736-8_3)
## Amortized Functional Bootstrapping in Less than 7 ms, with Õ(1) Polynomial Multiplications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#amortized-functional-bootstrapping-in-less-than-7-ms-with-1-polynomial-multiplications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#amortized-functional-bootstrapping-in-less-than-7-ms-with-1-polynomial-multiplications)
### Authors
* Zeyu Liu, Yale University, New Haven, USA
* Yunhao Wang, Yale University, New Haven, USA
### Abstract
> Amortized bootstrapping offers a way to refresh multiple ciphertexts of a fully homomorphic encryption scheme in parallel more efficiently than refreshing a single ciphertext at a time. Micciancio and Sorrell (ICALP 2018) first proposed the technique to bootstrap n LWE ciphertexts simultaneously, reducing the total cost from \(\tilde{O}(n^2)\) to \(\tilde{O}(3^\epsilon n^{1+\frac{1}{\epsilon }})\) for arbitrary \(\epsilon > 0\). Several recent works have further improved the asymptotic cost. Despite these amazing progresses in theoretical efficiency, none of them demonstrates the practicality of batched LWE ciphertext bootstrapping. Moreover, most of these works only support limited functional bootstrapping, i.e. only supporting the evaluation of some specific type of function when performing bootstrapping.
> 
> In this work, we propose a construction that is not only asymptotically efficient (requiring only \(\tilde{O}(n)\) polynomial multiplications for bootstrapping of n LWE ciphertexts) but also concretely efficient. We implement our scheme as a C++ library and show that it takes \(< 5\) ms per LWE ciphertext to bootstrap for a binary gate, which is an order of magnitude faster than the state-of-the-art C++ implementation on LWE ciphertext bootstrapping in OpenFHE. Furthermore, our construction supports batched arbitrary functional bootstrapping. For a 9-bit messages space, our scheme takes \({\sim }6.7\) ms per LWE ciphertext to evaluate an arbitrary function with bootstrapping, which is about two to three magnitudes faster than all the existing schemes that achieve a similar functionality and message space.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_4](https://doi.org/10.1007/978-981-99-8736-8_4)
## Sender-Anamorphic Encryption Reformulated: Achieving Robust and Generic Constructions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#sender-anamorphic-encryption-reformulated-achieving-robust-and-generic-constructions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#sender-anamorphic-encryption-reformulated-achieving-robust-and-generic-constructions)
### Authors
* Yi Wang, School of Computer, National University of Defense Technology, Changsha, China
* Rongmao Chen, School of Computer, National University of Defense Technology, Changsha, China
* Xinyi Huang, The Hong Kong University of Science and Technology (Guangzhou), Guangzhou, China
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York, USA
### Abstract
> Motivated by the violation of two fundamental assumptions in secure communication - receiver-privacy and sender-freedom - by a certain entity referred to as “the dictator”, Persiano et al. introduced the concept of Anamorphic Encryption (AME) for public key cryptosystems (EUROCRYPT 2022). Specifically, they presented receiver/sender-AME, directly tailored to scenarios where receiver privacy and sender freedom assumptions are compromised, respectively. In receiver-AME, entities share a double key to communicate in anamorphic fashion, raising concerns about the online distribution of the double key without detection by the dictator. The sender-AME with no shared secret is a potential candidate for key distribution. However, the only such known schemes (i.e., LWE and Dual LWE encryptions) suffer from an intrinsic limitation and cannot achieve reliable distribution.
> 
> Here, we reformulate the sender-AME, present the notion of \(\ell \)-sender-AME and formalize the properties of (strong) security and robustness. Robustness refers to guaranteed delivery of duplicate messages to the intended receiver, ensuring that decrypting normal ciphertexts in an anamorphic way or decrypting anamorphic ciphertexts with an incorrect duplicate secret key results in an explicit abort signal. We first present a simple construction for pseudo-random and robust public key encryption that shares the similar idea of public-key stegosystem by von Ahn and Hopper (EUROCRYPT 2004). Then, inspired by Chen et al.’s malicious algorithm-substitution attack (ASA) on key encapsulation mechanisms (KEM) (ASIACRYPT 2020), we give a generic construction for hybrid PKE with special KEM that encompasses well-known schemes, including ElGamal and Cramer-Shoup cryptosystems.
> 
> The constructions of \(\ell \)-sender-AME motivate us to explore the relations between AME, ASA on PKE, and public-key stegosystem. The results show that a strongly secure \(\ell \)-sender-AME is such a strong primitive that implies reformulated receiver-AME, public-key stegosystem, and generalized ASA on PKE. By expanding the scope of sender-anamorphic encryption and establishing its robustness, as well as exploring the connections among existing notions, we advance secure communication protocols under challenging operational conditions.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_5](https://doi.org/10.1007/978-981-99-8736-8_5)
## Efficient Secure Storage with Version Control and Key Rotation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#efficient-secure-storage-with-version-control-and-key-rotation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#efficient-secure-storage-with-version-control-and-key-rotation)
### Authors
* Long Chen, Institute of Software Chinese Academy of Sciences, Beijing, China
* Hui Guo, The State Key Laboratory of Cryptology, Beijing, China
* Ya-Nan Li, The University of Sydney, Sydney, Australia
* Qiang Tang, The University of Sydney, Sydney, Australia
### Abstract
> Periodic key rotation is a widely used technique to enhance key compromise resilience. Updatable encryption (UE) schemes provide an efficient approach to key rotation, ensuring post-compromise security for both confidentiality and integrity. However, these UE techniques cannot be directly applied to frequently updated databases due to the risk of a malicious server inducing the client to accept an outdated version of a file instead of the latest one.
> 
> To address this issue, we propose a scheme called Updatable Secure Storage (USS), which provides a secure and key updatable solution for dynamic databases. USS ensures both data confidentiality and integrity, even in the presence of key compromises. By using efficient key rotation and file update procedures, the communication costs of these operations are independent of the size of the database. This makes USS particularly well-suited for managing large and frequently updated databases with secure version control. Unlike existing UE schemes, the integrity provided by USS holds even when the server learns the current secret key and intentionally violates the key update protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_6](https://doi.org/10.1007/978-981-99-8736-8_6)
## Fine-Grained Proxy Re-encryption: Definitions and Constructions from LWE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#fine-grained-proxy-re-encryption-definitions-and-constructions-from-lwe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#fine-grained-proxy-re-encryption-definitions-and-constructions-from-lwe)
### Authors
* Yunxiao Zhou, School of Cyber Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shuai Han, School of Cyber Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yunxiao Zhou, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Haibin Zhang, Beijing Institute of Technology, Beijing, 100081, China
### Abstract
> Proxy re-encryption (PRE) allows a proxy with a re-encryption key to translate a ciphertext intended for Alice (delegator) to another ciphertext intended for Bob (delegatee) without revealing the underlying message. However, with PRE, Bob can obtain the whole message from the re-encrypted ciphertext, and Alice cannot take flexible control of the extent of the message transmitted to Bob.
> 
> In this paper, we propose a new variant of PRE, called Fine-Grained PRE (FPRE), to support fine-grained re-encryptions. An FPRE is associated with a function family \(\mathcal {F}\), and each re-encryption key \(rk_{A\rightarrow B}^f\) is associated with a function \(f\in \mathcal {F}\). With FPRE, Alice now can authorize re-encryption power to proxy by issuing \(rk_{A\rightarrow B}^f\) to it, with f chosen by herself. Then the proxy can translate ciphertext encrypting m to Bob’s ciphertext encrypting f(m) with such a fine-grained re-encryption key, and Bob only obtains a function of message m. In this way, Alice can take flexible control of the message spread by specifying functions.
> 
> For FPRE, we formally define its syntax and formalize security notions including CPA security, ciphertext pseudo-randomness, unidirectionality, non-transitivity, collusion-safety under adaptive corruptions in the multi-user setting. Moreover, we propose a new security notion named ciphertext unlinkability, which blurs the link between a ciphertext and its re-encrypted ciphertext to hide the proxy connections between users. We establish the relations between those security notions.
> 
> As for constructions, we propose two FPRE schemes, one for bounded linear functions and the other for deletion functions, based on the learning-with-errors (LWE) assumption. Our FPRE schemes achieve all the aforementioned desirable securities under adaptive corruptions in the standard model. As far as we know, our schemes provide the first solution to PRE with security under adaptive corruptions in the standard model.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_7](https://doi.org/10.1007/978-981-99-8736-8_7)
## Injection-Secure Structured and Searchable Symmetric Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#injection-secure-structured-and-searchable-symmetric-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#injection-secure-structured-and-searchable-symmetric-encryption)
### Authors
* Ghous Amjad, Google, Menlo Park, USA
* Seny Kamara, MongoDB, New York, USA
* Tarik Moataz, MongoDB, New York, USA
* Seny Kamara, Brown University, Providence, USA
### Abstract
> Recent work on dynamic structured and searchable symmetric encryption has focused on achieving the notion of forward-privacy. This is mainly motivated by the claim that forward privacy protects against adaptive file injection attacks (Zhang, Katz, Papamanthou, Usenix Security, 2016). In this work, we revisit the notion of forward-privacy in several respects. First, we observe that forward-privacy does not necessarily guarantee security against adaptive file injection attacks if a scheme reveals other leakage patterns like the query equality. We then propose a notion of security called correlation security which generalizes forward privacy. We then show how correlation security can be used to formally define security against different kinds of injection attacks. We then propose the first injection-secure multi-map encryption scheme and use it as a building block to design the first injection-secure searchable symmetric encryption (SSE) scheme. Towards achieving this, we also propose a new fully-dynamic volume-hiding multi-map encryption scheme which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_8](https://doi.org/10.1007/978-981-99-8736-8_8)
## Hermes: I/O-Efficient Forward-Secure Searchable Symmetric Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#hermes-i-o-efficient-forward-secure-searchable-symmetric-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#hermes-i-o-efficient-forward-secure-searchable-symmetric-encryption)
### Authors
* Brice Minaud, École Normale Supérieure, PSL University, CNRS, Inria, Paris, France
* Michael Reichle, ETH Zürich, Zurich, Switzerland
### Abstract
> Dynamic Symmetric Searchable Encryption (SSE) enables a user to outsource the storage of an encrypted database to an untrusted server, while retaining the ability to privately search and update the outsourced database. The performance bottleneck of SSE schemes typically comes from their I/O efficiency. Over the last decade, a line of work has substantially improved that bottleneck. However, all existing I/O-efficient SSE schemes have a common limitation: they are not forward-secure. Since the seminal work of Bost at CCS 2016, forward security has become a de facto standard in SSE. In the same article, Bost conjectures that forward security and I/O efficiency are incompatible. This explains the current status quo, where users are forced to make a difficult choice between security and efficiency.
> 
> The central contribution of this paper it to show that, contrary to what the status quo suggests, forward security and I/O efficiency can be realized simultaneously. This result is enabled by two new key techniques. First, we make use of a controlled amount of client buffering, combined with a deterministic update schedule. Second, we introduce the notion of SSE supporting dummy updates. In combination, those two techniques offer a new path to realizing forward security, which is compatible with I/O efficiency. Our new SSE scheme, \(\textsf{Hermes}\), achieves sublogarithmic I/O efficiency \(\widetilde{\mathcal {O}}\left( {\log \log \frac{N}{p}}\right) \), storage efficiency \(\mathcal {O}\left( 1\right) \), with standard leakage, as well as backward and forward security. Practical experiments confirm that \(\textsf{Hermes}\) achieves excellent performance.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_9](https://doi.org/10.1007/978-981-99-8736-8_9)
## To Attest or Not to Attest, This is the Question - Provable Attestation in FIDO2.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#to-attest-or-not-to-attest-this-is-the-question-provable-attestation-in-fido2)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#to-attest-or-not-to-attest-this-is-the-question-provable-attestation-in-fido2)
### Authors
* Nina Bindel, SandboxAQ, Palo Alto, CA, USA
* Nicolas Gama, SandboxAQ, Palo Alto, CA, USA
* Sandra Guasch, SandboxAQ, Palo Alto, CA, USA
* Eyal Ronen, Tel Aviv University, Tel Aviv, Israel
### Abstract
> FIDO2 is currently the main initiative for passwordless authentication in web servers. It mandates the use of secure hardware authenticators to protect the authentication protocol’s secrets from compromise. However, to ensure that only secure authenticators are being used, web servers need a method to attest their properties. The FIDO2 specifications allow for authenticators and web servers to choose between different attestation modes to prove the characteristics of an authenticator, however the properties of most these modes have not been analysed in the context of FIDO2. In this work, we analyse the security and privacy properties of FIDO2 when different attestation modes included in the standard are used, and show that they lack good balance between security, privacy and revocation of corrupted devices. For example, the basic attestation mode prevents remote servers from tracing user’s actions across different services while requiring reduced trust assumptions. However in case one device is compromised, all the devices from the same batch (e.g., of the same brand or model) need to be recalled, which can be quite complex (and arguably impractical) in consumer scenarios. As a consequence we suggest a new attestation mode based on the recently proposed TokenWeaver, which provides more convenient mechanisms for revoking a single token while maintaining user privacy.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_10](https://doi.org/10.1007/978-981-99-8736-8_10)
## The Pre-Shared Key Modes of HPKE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#the-pre-shared-key-modes-of-hpke)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#the-pre-shared-key-modes-of-hpke)
### Authors
* Joël Alwen, AWS-Wickr, Seattle, USA
* Jonas Janneck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Benjamin Lipp, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> The Hybrid Public Key Encryption (HPKE) standard was recently published as RFC 9180 by the Crypto Forum Research Group (CFRG) of the Internet Research Task Force (IRTF). The RFC specifies an efficient public key encryption scheme, combining asymmetric and symmetric cryptographic building blocks.
> 
> Out of HPKE’s four modes, two have already been formally analyzed by Alwen et al. (EUROCRYPT 2021). This work considers the remaining two modes: \(\textsf{HPKE}_\textsf{PSK}\) and \(\textsf{HPKE}_\textsf{AuthPSK}\). Both of them are “pre-shared key” modes that assume the sender and receiver hold a symmetric pre-shared key. We capture the schemes with two new primitives which we call pre-shared key public-key encryption (\(\textsf{pskPKE}\)) and pre-shared key authenticated public-key encryption (\(\textsf{pskAPKE}\)). We provide formal security models for \(\textsf{pskPKE}\) and \(\textsf{pskAPKE}\) and prove (via general composition theorems) that the two modes \(\textsf{HPKE}_\textsf{PSK}\) and \(\textsf{HPKE}_\textsf{AuthPSK}\) offer active security (in the sense of insider privacy and outsider authenticity) under the Gap Diffie-Hellman assumption.
> 
> We furthermore explore possible post-quantum secure instantiations of the HPKE standard and propose new solutions based on lattices and isogenies. Moreover, we show how HPKE’s basic \(\textsf{HPKE}_\textsf{PSK}\) and \(\textsf{HPKE}_\textsf{AuthPSK}\) modes can be used black-box in a simple way to build actively secure post-quantum/classic-hybrid (authenticated) encryption schemes. Our hybrid constructions provide a cheap and easy path towards a practical post-quantum secure drop-in replacement for the basic HPKE modes \(\textsf{HPKE}_\textsf{Base}\) and \(\textsf{HPKE}_\textsf{Auth}\).

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_11](https://doi.org/10.1007/978-981-99-8736-8_11)
## Unified View for Notions of Bit Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#unified-view-for-notions-of-bit-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#unified-view-for-notions-of-bit-security)
### Authors
* Shun Watanabe, Tokyo University of Agriculture and Technology, Tokyo, Japan
* Kenji Yasunaga, Tokyo Institute of Technology, Tokyo, Japan
### Abstract
> A theoretical framework of the bit security of cryptographic primitives/games was first introduced in a pioneering work by Micciancio and Walter (Eurocrypt 2018), and an alternative framework was introduced by the authors (Asiacrypt 2021). First, we observe that quantitative results in the latter framework are preserved even if adversaries are allowed to output the failure symbol. With this slight modification, we show that the notion of bit security in the latter framework is equivalent to that in the former framework up to constant bits. Also, we demonstrate that several existing notions of advantages can be captured in a unified way. Based on this equivalence, we show that the reduction algorithm of Hast (J. Cryptology, 2004) gives a tight reduction of the Goldreich-Levin hard-core predicate to the hardness of one-way functions. These two results resolved open problems that remained.
> 
> Furthermore, in the latter framework, we show that all games we need to care about are decision games. Namely, for every search game G, there is the corresponding decision game \(G'\) such that G has \(\lambda \)-bit security if and only if \(G'\) has \(\lambda \)-bit security. The game \(G'\) consists of the real and the ideal games, where attacks in the ideal game are never approved. Such games often appear in game-hopping security proofs. The result justifies such security proofs because they lose no security. Finally, we provide a distribution replacement theorem. Suppose a game using distribution Q in a black-box manner is \(\lambda \)-bit secure, and two distributions P and Q are computationally \(\lambda \)-bit secure indistinguishable. In that case, the game where Q is replaced by P is also \(\lambda \)-bit secure.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_12](https://doi.org/10.1007/978-981-99-8736-8_12)
## The Relationship Between Idealized Models Under Computationally Bounded Adversaries.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#the-relationship-between-idealized-models-under-computationally-bounded-adversaries)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#the-relationship-between-idealized-models-under-computationally-bounded-adversaries)
### Authors
* Cong Zhang, Zhejiang University, Hangzhou, China
* Mark Zhandry, NTT Research, Sunnyvale, CA, USA
* Cong Zhang, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
### Abstract
> The random oracle, generic group, and generic bilinear map models (ROM, GGM, GBM, respectively) are fundamental heuristics used to justify new computational assumptions and prove the security of efficient cryptosystems. While known to be invalid in some contrived settings, the heuristics generally seem reasonable for real-world applications.
> 
> In this work, we ask: which heuristics are closer to reality? Or conversely, which heuristics are a larger leap? We answer this question through the framework of computational indifferentiability, showing that the ROM is a strictly “milder” heuristic than the GGM, which in turn is strictly milder than the GBM. While this may seem like the expected outcome, we explain why it does not follow from prior works, and is not the a priori obvious conclusion. In order to prove our results, we develop new ideas for proving computational indifferentiable separations.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_13](https://doi.org/10.1007/978-981-99-8736-8_13)
## Just How Fair is an Unreactive World?
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#just-how-fair-is-an-unreactive-world)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#just-how-fair-is-an-unreactive-world)
### Authors
* Srinivasan Raghuraman, Visa Research and MIT, Cambridge, USA
* Yibin Yang, Georgia Institute of Technology, Atlanta, USA
### Abstract
> Fitzi, Garay, Maurer, and Ostrovsky (J. Cryptology 2005) showed that in the presence of a dishonest majority, no primitive of cardinality \(n - 1\) is complete for realizing an arbitrary n-party functionality with guaranteed output delivery. In this work, we show that in the presence of \(n - 1\) corrupt parties, no unreactive primitive of cardinality \(n - 1\) is complete for realizing an arbitrary n-party functionality with fairness. We show more generally that for \(t > \frac{n}{2}\), in the presence of t malicious parties, no unreactive primitive of cardinality t is complete for realizing an arbitrary n-party functionality with fairness. We complement this result by noting that \((t+1)\)-wise fair exchange is complete for realizing an arbitrary n-party functionality with fairness. In order to prove our results, we utilize the primitive of fair coin tossing and the notion of predictability. While this notion has been considered in some form in past works, we come up with a novel and non-trivial framework to employ it, one that readily generalizes from the setting of two parties to multiple parties, and also to the setting of unreactive functionalities.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_14](https://doi.org/10.1007/978-981-99-8736-8_14)
