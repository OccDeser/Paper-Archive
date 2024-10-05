# Crypto[2024-7]
## A Modular Approach to Unclonable Cryptography.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#a-modular-approach-to-unclonable-cryptography)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#a-modular-approach-to-unclonable-cryptography)
### Authors
* Prabhanjan Ananth, University of California Santa Barbara, Santa Barbara, USA
* Amit Behera, Ben-Gurion University, Be’er Sheva, Israel
### Abstract
> We explore a new pathway to designing unclonable cryptographic primitives. We propose a new notion called unclonable puncturable obfuscation (UPO) and study its implications for unclonable cryptography. Using UPO, we present modular (and in some cases, arguably, simple) constructions of many primitives in unclonable cryptography, including, public-key quantum money, quantum copy-protection for many classes of functionalities, unclonable encryption, and single-decryption encryption.
> 
> Notably, we obtain the following new results assuming the existence of UPO:
> 
> We show that any cryptographic functionality can be copy-protected as long as it satisfies a notion of security, which we term puncturable security. Prior feasibility results focused on copy-protecting specific cryptographic functionalities.
> 
> We show that copy-protection exists for any class of evasive functions as long as the associated distribution satisfies a preimage-sampleability condition. Prior works demonstrated copy-protection for point functions, which follows as a special case of our result.
> 
> We put forward two constructions of UPO. The first construction satisfies two notions of security based on the existence of (post-quantum) sub-exponentially secure indistinguishability obfuscation, injective one-way functions, the quantum hardness of learning with errors, and the two versions of a new conjecture called the simultaneous inner product conjecture. The security of the second construction is based on the existence of unclonable-indistinguishable bit encryption, injective one-way functions, and quantum-state indistinguishability obfuscation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_1](https://doi.org/10.1007/978-3-031-68394-7_1)
## Unconditionally Secure Quantum Commitments with Preprocessing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#unconditionally-secure-quantum-commitments-with-preprocessing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#unconditionally-secure-quantum-commitments-with-preprocessing)
### Authors
* Luowen Qian, Boston University, Boston, USA
* Luowen Qian, NTT Research, Sunnyvale, USA
### Abstract
> We demonstrate how to build computationally secure commitment schemes with the aid of quantum auxiliary inputs without unproven complexity assumptions. Furthermore, the quantum auxiliary input can be either sampled in uniform exponential time or prepared in at most doubly exponential time, without relying on an external trusted third party. Classically, this remains impossible without first proving \(\textsf{P} \ne \textsf{NP}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_2](https://doi.org/10.1007/978-3-031-68394-7_2)
## Unconditionally Secure Commitments with Quantum Auxiliary Inputs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#unconditionally-secure-commitments-with-quantum-auxiliary-inputs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#unconditionally-secure-commitments-with-quantum-auxiliary-inputs)
### Authors
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Barak Nehoran, Princeton University, Princeton, NJ, USA
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
### Abstract
> We show the following unconditional results on quantum commitments in two related yet different models:
> 
> 1. We revisit the notion of quantum auxiliary-input commitments introduced by Chailloux, Kerenidis, and Rosgen (Comput. Complex. 2016) where both the committer and receiver take the same quantum state, which is determined by the security parameter, as quantum auxiliary inputs. We show that computationally-hiding and statistically-binding quantum auxiliary-input commitments exist unconditionally, i.e., without relying on any unproven assumption, while Chailloux et al. assumed a complexity-theoretic assumption, \(\textbf{QIP}\not \subseteq \textbf{QMA}\). On the other hand, we observe that achieving both statistical hiding and statistical binding at the same time is impossible even in the quantum auxiliary-input setting. To the best of our knowledge, this is the first example of unconditionally proving computational security of any form of (classical or quantum) commitments for which statistical security is impossible. As intermediate steps toward our construction, we introduce and unconditionally construct post-quantum sparse pseudorandom distributions and quantum auxiliary-input EFI pairs which may be of independent interest.
> 
> 2. We introduce a new model which we call the common reference quantum state (CRQS) model where both the committer and receiver take the same quantum state that is randomly sampled by an efficient setup algorithm. We unconditionally prove that there exist statistically hiding and statistically binding commitments in the CRQS model, circumventing the impossibility in the plain model.
> 
> We also discuss their applications to zero-knowledge proofs, oblivious transfers, and multi-party computations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_3](https://doi.org/10.1007/978-3-031-68394-7_3)
## Quantum Public-Key Encryption with Tamper-Resilient Public Keys from One-Way Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#quantum-public-key-encryption-with-tamper-resilient-public-keys-from-one-way-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#quantum-public-key-encryption-with-tamper-resilient-public-keys-from-one-way-functions)
### Authors
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Fuyuki Kitagawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Fuyuki Kitagawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
* Ryo Nishimaki, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
* Takashi Yamakawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
### Abstract
> We construct quantum public-key encryption from one-way functions. In our construction, public keys are quantum, but ciphertexts are classical. Quantum public-key encryption from one-way functions (or weaker primitives such as pseudorandom function-like states) are also proposed in some recent works [Morimae-Yamakawa, eprint:2022/1336; Coladangelo, eprint:2023/282; Barooti-Grilo-Malavolta-Sattath-Vu-Walter, TCC 2023]. However, they have a huge drawback: they are secure only when quantum public keys can be transmitted to the sender (who runs the encryption algorithm) without being tampered with by the adversary, which seems to require unsatisfactory physical setup assumptions such as secure quantum channels. Our construction is free from such a drawback: it guarantees the secrecy of the encrypted messages even if we assume only unauthenticated quantum channels. Thus, the encryption is done with adversarially tampered quantum public keys. Our construction is the first quantum public-key encryption that achieves the goal of classical public-key encryption, namely, to establish secure communication over insecure channels, based only on one-way functions. Moreover, we show a generic compiler to upgrade security against chosen plaintext attacks (CPA security) into security against chosen ciphertext attacks (CCA security) only using one-way functions. As a result, we obtain CCA secure quantum public-key encryption based only on one-way functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_4](https://doi.org/10.1007/978-3-031-68394-7_4)
## Robust Quantum Public-Key Encryption with Applications to Quantum Key Distribution.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#robust-quantum-public-key-encryption-with-applications-to-quantum-key-distribution)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#robust-quantum-public-key-encryption-with-applications-to-quantum-key-distribution)
### Authors
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Michael Walter, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> Quantum key distribution (QKD) allows Alice and Bob to agree on a shared secret key, while communicating over a public (untrusted) quantum channel. Compared to classical key exchange, it has two main advantages: (i) The key is unconditionally hidden to the eyes of any attacker, and (ii) its security assumes only the existence of authenticated classical channels which, in practice, can be realized using Minicrypt assumptions, such as the existence of digital signatures. On the flip side, QKD protocols typically require multiple rounds of interactions, whereas classical key exchange can be realized with the minimal amount of two messages using public-key encryption. A long-standing open question is whether QKD requires more rounds of interaction than classical key exchange.
> 
> In this work, we propose a two-message QKD protocol that satisfies everlasting security, assuming only the existence of quantum-secure one-way functions. That is, the shared key is unconditionally hidden, provided computational assumptions hold during the protocol execution. Our result follows from a new construction of quantum public-key encryption (QPKE) whose security, much like its classical counterpart, only relies on authenticated classical channels.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_5](https://doi.org/10.1007/978-3-031-68394-7_5)
## How (not) to Build Quantum PKE in Minicrypt.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#how-not-to-build-quantum-pke-in-minicrypt)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#how-not-to-build-quantum-pke-in-minicrypt)
### Authors
* Longcheng Li, State Key Lab of Processors, Institute of Computing Technology, Chinese Academy of Sciences, Beijing, China
* Qian Li, Shenzhen International Center for Industrial and Applied Mathematics, Shenzhen Research Institute of Big Data, Shenzhen, China
* Xingjian Li, Tsinghua University, Beijing, China
* Qipeng Liu, University of California, San Diego, San Diego, CA, USA
### Abstract
> The seminal work by Impagliazzo and Rudich (STOC’89) demonstrated the impossibility of constructing classical public key encryption (PKE) from one-way functions (OWF) in a black-box manner. Quantum information has the potential to bypass classical limitations, enabling the realization of seemingly impossible tasks such as quantum money, copy protection for software, and commitment without one-way functions. However, the question remains: can quantum PKE (QPKE) be constructed from quantumly secure OWF?
> 
> A recent line of work has shown that it is indeed possible to build QPKE from OWF, but with one caveat. These constructions necessitate public keys being quantum and unclonable, diminishing the practicality of such “public” encryption schemes—public keys cannot be authenticated and reused. In this work, we re-examine the possibility of perfect complete QPKE in the quantum random oracle model (QROM), where OWF exists.
> 
> Our first main result: QPKE with classical public keys, secret keys and ciphertext, does not exist in the QROM, if the key generation only makes classical queries.
> 
> Therefore, a necessary condition for constructing such QPKE from OWF is to have the key generation classically “un-simulatable”. Previous results (Austrin et al. CRYPTO’22) on the impossibility of QPKE from OWF rely on a seemingly strong conjecture. Our work makes a significant step towards a complete and unconditional quantization of Impagliazzo and Rudich’s results.
> 
> Our second main result extends to QPKE with quantum public keys.
> 
> The second main result: QPKE with quantum public keys, classical secret keys and ciphertext, does not exist in the QROM, if the key generation only makes classical queries and the quantum public key is either pure or “efficiently clonable”.
> 
> The result is tight due to these existing QPKEs with quantum public keys, classical secret keys, quantum/classical ciphertext and classical-query key generation require the public key to be mixed instead of pure; or require quantum-query key generation, if the public key is pure. Our result further gives evidence on why existing QPKEs lose reusability.
> 
> We also explore other sufficient/necessary conditions to build QPKE from OWF. Along the way, we use a new argument based on conditional mutual information and Markov chain to reprove the classical result; leveraging the analog of quantum conditional mutual information and quantum Markov chain by Fawzi and Renner (Communications in Mathematical Physics), we extend it to the quantum case and prove all our results. We believe the techniques used in the work will find many other usefulness in separations in quantum cryptography/complexity.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_6](https://doi.org/10.1007/978-3-031-68394-7_6)
## Secret Sharing with Certified Deletion.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#secret-sharing-with-certified-deletion)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#secret-sharing-with-certified-deletion)
### Authors
* James Bartusek, UC Berkeley, Berkeley, USA
* Justin Raizes, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Secret sharing allows a user to split a secret into many shares so that the secret can be recovered if, and only if, an authorized set of shares is collected. Although secret sharing typically does not require any computational hardness assumptions, its security does require that an adversary cannot collect an authorized set of shares. Over long periods of time where an adversary can benefit from multiple data breaches, this may become an unrealistic assumption.
> 
> We initiate the systematic study of secret sharing with certified deletion in order to achieve security even against an adversary that eventually collects an authorized set of shares. In secret sharing with certified deletion, a (classical) secret s is split into quantum shares that can be destroyed in a manner verifiable by the dealer.
> 
> We put forth two natural definitions of security. No-signaling security roughly requires that if multiple non-communicating adversaries delete sufficiently many shares, then their combined view contains negligible information about s, even if the total set of corrupted parties forms an authorized set. Adaptive security requires privacy of s against an adversary that can continuously and adaptively corrupt new shares and delete previously-corrupted shares, as long as the total set of corrupted shares minus deleted shares remains unauthorized.
> 
> Next, we show that these security definitions are achievable: we show how to construct (i) a secret sharing scheme with no-signaling certified deletion for any monotone access structure, and (ii) a threshold secret sharing scheme with adaptive certified deletion. Our first construction uses Bartusek and Khurana’s (CRYPTO 2023) 2-out-of-2 secret sharing scheme with certified deletion as a building block, while our second construction is built from scratch and requires several new technical ideas. For example, we significantly generalize the “XOR extractor” of Agarwal, Bartusek, Khurana, and Kumar (EUROCRYPT 2023) in order to obtain better seedless extraction from certain quantum sources of entropy, and show how polynomial interpolation can double as a high-rate randomness extractor in our context of threshold sharing with certified deletion.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_7](https://doi.org/10.1007/978-3-031-68394-7_7)
## On Central Primitives for Quantum Cryptography with Classical Communication.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#on-central-primitives-for-quantum-cryptography-with-classical-communication)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#on-central-primitives-for-quantum-cryptography-with-classical-communication)
### Authors
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Eli Goldin, New York University, New York, USA
* Matthew Gray, University of Oxford, Oxford, UK
### Abstract
> Recent work has introduced the “Quantum-Computation Classical-Communication” (QCCC) (Chung et al.) setting for cryptography. There has been some evidence that One Way Puzzles (\(\textsf{OWPuzz}\)) are the natural central cryptographic primitive for this setting (Khurana and Tomer). For a primitive to be considered central it should have several characteristics. It should be well behaved (which for this paper we will think of as having amplification, combiners, and universal constructions); it should be implied by a wide variety of other primitives; and it should be equivalent to some class of useful primitives. We present combiners, correctness and security amplification, and a universal construction for \(\textsf{OWPuzz}\). Our proof of security amplification uses a new and cleaner construction of EFI from \(\textsf{OWPuzz}\) (in comparison to the result of Khurana and Tomer) that generalizes to weak \(\textsf{OWPuzz}\) and is the most technically involved section of the paper. It was previously known that \(\textsf{OWPuzz}\) are implied by other primitives of interest including commitments, symmetric key encryption, one way state generators (\(\textsf{OWSG}\)), and therefore pseudorandom states (\(\textsf{PRS}\)). However we are able to rule out \(\textsf{OWPuzz}\)’s equivalence to many of these primitives by showing a black box separation between general \(\textsf{OWPuzz}\) and a restricted class of \(\textsf{OWPuzz}\) (those with efficient verification, which we call \(\mathsf {EV-OWPuzz}\)). We then show that \(\mathsf {EV-OWPuzz}\) are also implied by most of these primitives, which separates them from \(\textsf{OWPuzz}\) as well. This separation also separates extending \(\textsf{PRS}\) from highly compressing \(\textsf{PRS}\) answering an open question of Ananth et al.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_8](https://doi.org/10.1007/978-3-031-68394-7_8)
## Adaptively Secure BLS Threshold Signatures from DDH and co-CDH.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#adaptively-secure-bls-threshold-signatures-from-ddh-and-co-cdh)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#adaptively-secure-bls-threshold-signatures-from-ddh-and-co-cdh)
### Authors
* Sourav Das, University of Illinois at Urbana Champaign, Champaign, USA
* Ling Ren, University of Illinois at Urbana Champaign, Champaign, USA
### Abstract
> Threshold signatures are one of the most important cryptographic primitives in distributed systems. A popular choice of threshold signature scheme is the BLS threshold signature introduced by Boldyreva (PKC’03). Some attractive properties of Boldyreva’s threshold signature are that the signatures are unique and short, the signing process is non-interactive, and the verification process is identical to that of non-threshold BLS. These properties have resulted in its practical adoption in several decentralized systems. However, despite its popularity and wide adoption, up until recently, the Boldyreva scheme has been proven secure only against a static adversary. Very recently, Bacho and Loss (CCS’22) presented the first proof of adaptive security for the Boldyreva scheme, but they have to rely on strong and non-standard assumptions such as the hardness of one-more discrete log (OMDL) and the Algebraic Group Model (AGM). In this paper, we present the first adaptively secure threshold BLS signature scheme that relies on the hardness of DDH and co-CDH in asymmetric pairing groups in the Random Oracle Model (ROM). Our signature scheme also has non-interactive signing, compatibility with non-threshold BLS verification, and practical efficiency like Boldyreva’s scheme. These properties make our protocol a suitable candidate for practical adoption with the added benefit of provable adaptive security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_9](https://doi.org/10.1007/978-3-031-68394-7_9)
## Round-Optimal, Fully Secure Distributed Key Generation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#round-optimal-fully-secure-distributed-key-generation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#round-optimal-fully-secure-distributed-key-generation)
### Authors
* Jonathan Katz, Google and University of Maryland, College Park, USA
### Abstract
> Protocols for distributed (threshold) key generation (DKG) in the discrete-logarithm setting have received a tremendous amount of attention in the past few years. Several synchronous DKG protocols have been proposed, but most such protocols are not fully secure: they either allow corrupted parties to bias the key, or are not robust and allow malicious parties to prevent successful generation of a key.
> 
> We explore the round complexity of fully secure DKG in the honest-majority setting where it is feasible. We show the impossibility of one-round, statistically unbiased DKG protocols (even if not robust), regardless of any prior setup. On the positive side, we show various round-optimal protocols for fully secure DKG offering tradeoffs in terms of their efficiency, necessary setup, and required assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_10](https://doi.org/10.1007/978-3-031-68394-7_10)
## Accountability for Misbehavior in Threshold Decryption via Threshold Traitor Tracing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#accountability-for-misbehavior-in-threshold-decryption-via-threshold-traitor-tracing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#accountability-for-misbehavior-in-threshold-decryption-via-threshold-traitor-tracing)
### Authors
* Dan Boneh, Stanford University, Stanford, USA
* Aditi Partap, Stanford University, Stanford, USA
* Lior Rotem, Stanford University, Stanford, USA
### Abstract
> A t-out-of-n threshold decryption system assigns key shares to n parties so that any t of them can decrypt a well-formed ciphertext. Existing threshold decryption systems are not secure when these parties are rational actors: an adversary can offer to pay the parties for their key shares. The problem is that a quorum of t parties, working together, can sell the adversary a decryption key that reveals nothing about the identity of the traitor parties. This provides a risk-free profit for the parties since there is no accountability for their misbehavior—the information they sell to the adversary reveals nothing about their identity. This behavior can result in a complete break in many applications of threshold decryption, such as encrypted mempools, private voting, and sealed-bid auctions.
> 
> In this work we propose a solution to this problem. Suppose a quorum of t or more parties construct a decoder algorithm \(D(\cdot )\) that takes as input a ciphertext and outputs the corresponding plaintext or \(\bot \). They sell D to the adversary. Our threshold decryption systems are equipped with a tracing algorithm that can trace D to members of the quorum that created it. The tracing algorithm is only given blackbox access to D and will identify some members of the misbehaving quorum. The parties can then be held accountable, which may discourage them from selling the decoder D in the first place.
> 
> Our starting point is standard (non-threshold) traitor tracing, where n parties each holds a secret key. Every party can decrypt a well-formed ciphertext on its own. However, if a subset of parties \(\mathcal{J} \subseteq [n]\) collude to create a pirate decoder \(D(\cdot )\) that can decrypt well-formed ciphertexts, then it is possible to trace D to at least one member of \(\mathcal{J}\) using only blackbox access to the decoder D.
> 
> In this work we develop the theory of traitor tracing for threshold decryption, where now only a subset \(\mathcal{J} \subseteq [n]\) of t or more parties can collude to create a pirate decoder \(D(\cdot )\). This problem has recently become quite important due to the real-world deployment of threshold decryption in encrypted mempools, as we explain in the paper. While there are several non-threshold traitor tracing schemes that we can leverage, adapting these constructions to the threshold decryption settings requires new cryptographic techniques. We present a number of constructions for traitor tracing for threshold decryption, and note that much work remains to explore the large design space.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_11](https://doi.org/10.1007/978-3-031-68394-7_11)
## Threshold Encryption with Silent Setup.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#threshold-encryption-with-silent-setup)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#threshold-encryption-with-silent-setup)
### Authors
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Guru-Vamsi Policharla, UC Berkeley, Berkeley, USA
* Mingyuan Wang, UC Berkeley, Berkeley, USA
* Dimitris Kolonelos, IMDEA Software Institute, Universidad Politécnica de Madrid, Madrid, Spain
### Abstract
> We build a concretely efficient threshold encryption scheme where the joint public key of a set of parties is computed as a deterministic function of their locally computed public keys, enabling a silent setup phase. By eliminating interaction from the setup phase, our scheme immediately enjoys several highly desirable features such as asynchronous setup, multiverse support, and dynamic threshold.
> 
> Prior to our work, the only known constructions of threshold encryption with silent setup relied on heavy cryptographic machinery such as indistinguishability Obfuscation or witness encryption for all of \(\textsf{NP}\). Our core technical innovation lies in building a special purpose witness encryption scheme for the statement “at least t parties have signed a given message”. Our construction relies on pairings and is proved secure in the Generic Group Model.
> 
> Notably, our construction, restricted to the special case of threshold \(t=1\), gives an alternative construction of the (flexible) distributed broadcast encryption from pairings, which has been the central focus of several recent works.
> 
> We implement and evaluate our scheme to demonstrate its concrete efficiency. Both encryption and partial decryption are constant time, taking \(<7\,\)ms and \(<1\,\)ms, respectively. For a committee of 1024 parties, the aggregation of partial decryptions takes \(<200\,\)ms, when all parties provide partial decryptions. The size of each ciphertext is \(\approx 8\times \) larger than an ElGamal ciphertext.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_12](https://doi.org/10.1007/978-3-031-68394-7_12)
## Two-Round Threshold Signature from Algebraic One-More Learning with Errors.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#two-round-threshold-signature-from-algebraic-one-more-learning-with-errors)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#two-round-threshold-signature-from-algebraic-one-more-learning-with-errors)
### Authors
* Thomas Espitau, PQShield SAS, Paris, France
* Shuichi Katsumata, PQShield, Ltd., Oxford, UK
* Kaoru Takemure, PQShield, Ltd., Oxford, UK
* Shuichi Katsumata, AIST, Tokyo, Japan
* Kaoru Takemure, AIST, Tokyo, Japan
### Abstract
> Threshold signatures have recently seen a renewed interest due to applications in cryptocurrency while NIST has released a call for multi-party threshold schemes, with a deadline for submission expected for the first half of 2025. So far, all lattice-based threshold signatures requiring two-rounds or less are based on heavy tools such as (fully) homomorphic encryption (FHE) and homomorphic trapdoor commitments (HTDC). This is not unexpected considering that most efficient two-round signatures from classical assumptions either rely on idealized model such as algebraic group models or on one-more type assumptions, none of which we have a nice analogue in the lattice world.
> 
> In this work, we construct the first efficient two-round lattice-based threshold signature without relying on FHE or HTDC. It has an offline-online feature where the first round can be preprocessed without knowing message or the signer sets, effectively making the signing phase non-interactive. The signature size is small and shows great scalability. For example, even for a threshold as large as 1024 signers, we achieve a signature size roughly 11 KB. At the heart of our construction is a new lattice-based assumption called the algebraic one-more learning with errors (\(\textsf{AOM}\text {-}\textsf{MLWE} \)) assumption. We believe this to be a strong inclusion to our lattice toolkits with an independent interest. We establish the selective security of \(\textsf{AOM}\text {-}\textsf{MLWE} \) based on the standard \(\textsf{MLWE} \) and \(\textsf{MSIS} \) assumptions, and provide an in depth analysis of its adaptive security, which our threshold signature is based on.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_13](https://doi.org/10.1007/978-3-031-68394-7_13)
## Flood and Submerse: Distributed Key Generation and Robust Threshold Signature from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#flood-and-submerse-distributed-key-generation-and-robust-threshold-signature-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#flood-and-submerse-distributed-key-generation-and-robust-threshold-signature-from-lattices)
### Authors
* Thomas Espitau, PQShield SAS, Paris, France
* Guilhem Niot, PQShield SAS, Paris, France
* Thomas Prest, PQShield SAS, Paris, France
* Guilhem Niot, Univ Rennes, CNRS, IRISA, Rennes, France
### Abstract
> We propose a new framework based on random submersions—that is projection over a random subspace blinded by a small Gaussian noise—for constructing verifiable short secret sharing and showcase it to construct efficient threshold lattice-based signatures in the hash-and-sign paradigm, when based on noise flooding. This is, to our knowledge, the first hash-and-sign lattice-based threshold signature.
> 
> Our threshold signature enjoys the very desirable property of robustness, including at key generation. In practice, we are able to construct a robust hash-and-sign threshold signature for threshold and provide a typical parameter set for threshold \(T=16\) and signature size 13kB. Our constructions are provably secure under standard \(\textsf{MLWE} \) assumption in the \(\textsf{ROM}\) and only require basic primitives as building blocks. In particular, we do not rely on FHE-type schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_14](https://doi.org/10.1007/978-3-031-68394-7_14)
## Adaptively Secure 5 Round Threshold Signatures from MLWE/MSIS and DL with Rewinding.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-7].md#adaptively-secure-5-round-threshold-signatures-from-mlwe-msis-and-dl-with-rewinding)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#adaptively-secure-5-round-threshold-signatures-from-mlwe-msis-and-dl-with-rewinding)
### Authors
* Shuichi Katsumata, PQShield, Ltd., Oxford, UK
* Kaoru Takemure, PQShield, Ltd., Oxford, UK
* Shuichi Katsumata, AIST, Tokyo, Japan
* Kaoru Takemure, AIST, Tokyo, Japan
* Michael Reichle, ETH Zurich, Zurich, Switzerland
### Abstract
> T-out-of-N threshold signatures have recently seen a renewed interest, with various types now available, each offering different tradeoffs. However, one property that has remained elusive is adaptive security. When we target thresholdizing existing efficient signatures schemes based on the Fiat-Shamir paradigm such as Schnorr, the elusive nature becomes clear. This class of signature schemes typically rely on the forking lemma to prove unforgeability. That is, an adversary is rewound and run twice within the security game. Such a proof is at odds with adaptive security, as the reduction must be ready to answer \(2(T - 1)\) secret key shares in total, implying that it can reconstruct the full secret key. Indeed, prior works either assumed strong idealized models such as the algebraic group model (AGM) or modified the underlying signature scheme so as not to rely on rewinding based proofs.
> 
> In this work, we propose a new proof technique to construct adaptively secure threshold signatures for existing rewinding-based Fiat-Shamir signatures. As a result, we obtain the following:
> 
> 1. The first adaptively secure 5 round lattice-based threshold signature under the \(\textsf{MLWE} \) and \(\textsf{MSIS} \) assumptions in the ROM. The resulting signature is a standard signature of \(\textsf{Raccoon}\), a lattice-based signature scheme by del Pino et al., submitted to the additional NIST call for proposals.
> 
> 2. The first adaptively secure 5 round threshold signature under the \(\textsf{DL} \) assumption in the ROM. The resulting signature is a standard Schnorr signature. To the best of our knowledge, this is the first adaptively secure threshold signature based on \(\textsf{DL} \) even assuming stronger models like AGM.
> 
> Our work is inspired by the recent statically secure lattice-based 3 round threshold signature by del Pino et al. (Eurocrypt 2024) based on \(\textsf{Raccoon}\). While they relied on so-called one-time additive masks to solve lattice specific issues, we notice that these masks can also be a useful tool to achieve adaptive security. At a very high level, we use these masks throughout the signing protocol to carefully control the information the adversary can learn from the signing transcripts. Intuitively, this allows the reduction to return a total of \(2(T-1)\) randomly sampled secret key shares to the adversary consistently and without being detected, resolving the above paradoxical situation. Lastly, by allowing the parties to maintain a simple state, we can compress our 5 round schemes into 4 rounds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_15](https://doi.org/10.1007/978-3-031-68394-7_15)
