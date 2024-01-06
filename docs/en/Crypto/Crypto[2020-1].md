# Crypto[2020-1]
## Handling Adaptive Compromise for Practical Encryption Schemes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#handling-adaptive-compromise-for-practical-encryption-schemes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#handling-adaptive-compromise-for-practical-encryption-schemes)
### Authors
* Joseph Jaeger, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Nirvan Tyagi, Cornell Tech, New York City, USA
### Abstract
> We provide a new definitional framework capturing the multi-user security of encryption schemes and pseudorandom functions in the face of adversaries that can adaptively compromise users’ keys. We provide a sequence of results establishing the security of practical symmetric encryption schemes under adaptive compromise in the random oracle or ideal cipher model. The bulk of analysis complexity for adaptive compromise security is relegated to the analysis of lower-level primitives such as pseudorandom functions.
> 
> We apply our framework to give proofs of security for the BurnBox system for privacy in the face of border searches and the in-use searchable symmetric encryption scheme due to Cash et al. In both cases, prior analyses had bugs that our framework helps avoid.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_1](https://doi.org/10.1007/978-3-030-56784-2_1)
## Overcoming Impossibility Results in Composable Security Using Interval-Wise Guarantees.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#overcoming-impossibility-results-in-composable-security-using-interval-wise-guarantees)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#overcoming-impossibility-results-in-composable-security-using-interval-wise-guarantees)
### Authors
* Daniel Jost, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
### Abstract
> Composable security definitions, at times called simulation-based definitions, provide strong security guarantees that hold in any context. However, they are also met with some skepticism due to many impossibility results; goals such as commitments and zero-knowledge that are achievable in a stand-alone sense were shown to be unachievable composably (without a setup) since provably no efficient simulator exists. In particular, in the context of adaptive security, the so-called “simulator commitment problem” arises: once a party gets corrupted, an efficient simulator is unable to be consistent with its pre-corruption outputs. A natural question is whether such impossibility results are unavoidable or only artifacts of frameworks being too restrictive.
> 
> In this work, we propose a novel type of composable security statement that evades the commitment problem. Our new type is able to express the composable guarantees of schemes that previously did not have a clear composable understanding. To this end, we leverage the concept of system specifications in the Constructive Cryptography framework, capturing the conjunction of several interval-wise guarantees, each specifying the guarantees between two events. We develop the required theory and present the corresponding new composition theorem.
> 
> We present three applications of our theory. First, we show in the context of symmetric encryption with adaptive corruption how our notion naturally captures the expected confidentiality guarantee—the messages remain confidential until either party gets corrupted—and that it can be achieved by any standard semantically secure scheme (negating the need for non-committing encryption). Second, we present a composable formalization of (so far only known to be standalone secure) commitment protocols, which is instantiable without a trusted setup like a CRS. We show it to be sufficient for being used in coin tossing over the telephone, one of the early intuitive applications of commitments. Third, we reexamine a result by Hofheinz, Matt, and Maurer [Asiacrypt’15] implying that IND-ID-CPA security is not the right notion for identity-based encryption, unmasking this claim as an unnecessary framework artifact.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_2](https://doi.org/10.1007/978-3-030-56784-2_2)
## Indifferentiability for Public Key Cryptosystems.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#indifferentiability-for-public-key-cryptosystems)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#indifferentiability-for-public-key-cryptosystems)
### Authors
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Palo Alto, USA
* Cong Zhang, Rutgers University, New Brunswick, USA
### Abstract
> We initiate the study of indifferentiability for public key encryption and other public key primitives. Our main results are definitions and constructions of public key cryptosystems that are indifferentiable from ideal cryptosystems, in the random oracle model. Cryptosystems include:
> 
> Public key encryption;
> 
> Digital signatures;
> 
> Non-interactive key agreement.
> 
> Our schemes are based on relatively standard public key assumptions. By being indifferentiable from an ideal object, our schemes automatically satisfy a wide range of security properties, including any property representable as a single-stage game, and can be composed to operate in higher-level protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_3](https://doi.org/10.1007/978-3-030-56784-2_3)
## Quantifying the Security Cost of Migrating Protocols to Practice.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#quantifying-the-security-cost-of-migrating-protocols-to-practice)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#quantifying-the-security-cost-of-migrating-protocols-to-practice)
### Authors
* Christopher Patton, Florida Institute for Cybersecurity Research, Computer and Information Science and Engineering, University of Florida, Gainesville, FL, USA
* Thomas Shrimpton, Florida Institute for Cybersecurity Research, Computer and Information Science and Engineering, University of Florida, Gainesville, FL, USA
### Abstract
> We give a framework for relating the concrete security of a “reference” protocol (say, one appearing in an academic paper) to that of some derived, “real” protocol (say, appearing in a cryptographic standard). It is based on the indifferentiability framework of Maurer, Renner, and Holenstein (MRH), whose application has been exclusively focused upon non-interactive cryptographic primitives, e.g., hash functions and Feistel networks. Our extension of MRH is supported by a clearly defined execution model and two composition lemmata, all formalized in a modern pseudocode language. Together, these allow for precise statements about game-based security properties of cryptographic objects (interactive or not) at various levels of abstraction. As a real-world application, we design and prove tight security bounds for a potential TLS 1.3 extension that integrates the SPAKE2 password-authenticated key-exchange into the handshake.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_4](https://doi.org/10.1007/978-3-030-56784-2_4)
## The Memory-Tightness of Authenticated Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#the-memory-tightness-of-authenticated-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#the-memory-tightness-of-authenticated-encryption)
### Authors
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Joseph Jaeger, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> This paper initiates the study of the provable security of authenticated encryption (AE) in the memory-bounded setting. Recent works – Tessaro and Thiruvengadam (TCC ’18), Jaeger and Tessaro (EUROCRYPT ’19), and Dinur (EUROCRYPT ’20) – focus on confidentiality, and look at schemes for which trade-offs between the attacker’s memory and its data complexity are inherent. Here, we ask whether these results and techniques can be lifted to the full AE setting, which additionally asks for integrity.
> 
> We show both positive and negative results. On the positive side, we provide tight memory-sensitive bounds for the security of GCM and its generalization, CAU (Bellare and Tackmann, CRYPTO ’16). Our bounds apply to a restricted case of AE security which abstracts the deployment within protocols like TLS, and rely on a new memory-tight reduction to corresponding restricted notions of confidentiality and integrity. In particular, our reduction uses an amount of memory which linearly depends on that of the given adversary, as opposed to only imposing a constant memory overhead as in earlier works (Auerbach et al., CRYPTO ’17).
> 
> On the negative side, we show that a large class of black-box reductions cannot generically lift confidentiality and integrity security to a joint definition of AE security in a memory-tight way.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_5](https://doi.org/10.1007/978-3-030-56784-2_5)
## Time-Space Tradeoffs and Short Collisions in Merkle-Damgård Hash Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#time-space-tradeoffs-and-short-collisions-in-merkle-damg-rd-hash-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#time-space-tradeoffs-and-short-collisions-in-merkle-damg-rd-hash-functions)
### Authors
* Akshima, University of Chicago, Chicago, USA
* David Cash, University of Chicago, Chicago, USA
* Andrew Drucker, University of Chicago, Chicago, USA
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, NTT Research, Palo Alto, USA
### Abstract
> We study collision-finding against Merkle-Damgård hashing in the random-oracle model by adversaries with an arbitrary S-bit auxiliary advice input about the random oracle and T queries. Recent work showed that such adversaries can find collisions (with respect to a random IV) with advantage \(\varOmega (ST^2/2^n)\), where n is the output length, beating the birthday bound by a factor of S. These attacks were shown to be optimal.
> 
> We observe that the collisions produced are very long, on the order of T blocks, which would limit their practical relevance. We prove several results related to improving these attacks to find shorter collisions. We first exhibit a simple attack for finding B-block-long collisions achieving advantage \(\tilde{\varOmega }(STB/2^n)\). We then study if this attack is optimal. We show that the prior technique based on the bit-fixing model (used for the \(ST^2/2^n\) bound) provably cannot reach this bound, and towards a general result we prove there are qualitative jumps in the optimal attacks for finding length 1, length 2, and unbounded-length collisions. Namely, the optimal attacks achieve (up to logarithmic factors) on the order of \((S+T)/2^n\), \(ST/2^n\) and \(ST^2/2^n\) advantage. We also give an upper bound on the advantage of a restricted class of short-collision finding attacks via a new analysis on the growth of trees in random functional graphs that may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_6](https://doi.org/10.1007/978-3-030-56784-2_6)
## The Summation-Truncation Hybrid: Reusing Discarded Bits for Free.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#the-summation-truncation-hybrid-reusing-discarded-bits-for-free)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#the-summation-truncation-hybrid-reusing-discarded-bits-for-free)
### Authors
* Aldo Gunsing, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### Abstract
> A well-established PRP-to-PRF conversion design is truncation: one evaluates an n-bit pseudorandom permutation on a certain input, and truncates the result to a bits. The construction is known to achieve tight \(2^{n-a/2}\) security. Truncation has gained popularity due to its appearance in the GCM-SIV key derivation function (ACM CCS 2015). This key derivation function makes four evaluations of AES, truncates the outputs to n/2 bits, and concatenates these to get a 2n-bit subkey.
> 
> In this work, we demonstrate that truncation is wasteful. In more detail, we present the Summation-Truncation Hybrid (STH). At a high level, the construction consists of two parallel evaluations of truncation, where the truncated \((n-a)\)-bit chunks are not discarded but rather summed together and appended to the output. We prove that STH achieves a similar security level as truncation, and thus that the \(n-a\) bits of extra output is rendered for free. In the application of GCM-SIV, the current key derivation can be used to output 3n bits of random material, or it can be reduced to three primitive evaluations. Both changes come with no security loss.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_7](https://doi.org/10.1007/978-3-030-56784-2_7)
## Security Analysis of NIST CTR-DRBG.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#security-analysis-of-nist-ctr-drbg)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#security-analysis-of-nist-ctr-drbg)
### Authors
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, FL, USA
* Yaobin Shen, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, China
### Abstract
> We study the security of \(\mathsf {CTR\text {-}DRBG}\), one of NIST’s recommended Pseudorandom Number Generator (PRNG) designs. Recently, Woodage and Shumow (Eurocrypt’ 19), and then Cohney et al. (S&P’ 20) point out some potential vulnerabilities in both NIST specification and common implementations of \(\mathsf {CTR\text {-}DRBG}\). While these researchers do suggest counter-measures, the security of the patched \(\mathsf {CTR\text {-}DRBG}\) is still questionable. Our work fills this gap, proving that \(\mathsf {CTR\text {-}DRBG}\) satisfies the robustness notion of Dodis et al. (CCS’13), the standard security goal for PRNGs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_8](https://doi.org/10.1007/978-3-030-56784-2_8)
## Security Analysis and Improvements for the IETF MLS Standard for Group Messaging.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#security-analysis-and-improvements-for-the-ietf-mls-standard-for-group-messaging)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#security-analysis-and-improvements-for-the-ietf-mls-standard-for-group-messaging)
### Authors
* Yevgeniy Dodis, New York University, New York, USA
* Yiannis Tselekounis, New York University, New York, USA
* Sandro Coretti, IOHK, Hong Kong, People’s Republic of China
* Joël Alwen, Wickr Inc., San Francisco, USA
### Abstract
> Secure messaging (SM) protocols allow users to communicate securely over untrusted infrastructure. In contrast to most other secure communication protocols (such as TLS, SSH, or Wireguard), SM sessions may be long-lived (e.g., years) and highly asynchronous. In order to deal with likely state compromises of users during the lifetime of a session, SM protocols do not only protect authenticity and privacy, but they also guarantee forward secrecy (FS) and post-compromise security (PCS). The former ensures that messages sent and received before a state compromise remain secure, while the latter ensures that users can recover from state compromise as a consequence of normal protocol usage.
> 
> SM has received considerable attention in the two-party case, where prior work has studied the well-known double-ratchet paradigm, in particular, and SM as a cryptographic primitive, in general. Unfortunately, this paradigm does not scale well to the problem of secure group messaging (SGM). In order to address the lack of satisfactory SGM protocols, the IETF has launched the message-layer security (MLS) working group, which aims to standardize an eponymous SGM protocol. In this work we analyze the TreeKEM protocol, which is at the core of the SGM protocol proposed by the MLS working group.
> 
> On a positive note, we show that TreeKEM achieves PCS in isolation (and slightly more). However, we observe that the current version of TreeKEM does not provide an adequate form of FS. More precisely, our work proceeds by formally capturing the exact security of TreeKEM as a so-called continuous group key agreement (CGKA) protocol, which we believe to be a primitive of independent interest. To address the insecurity of TreeKEM, we propose a simple modification to TreeKEM inspired by recent work of Jost et al. (EUROCRYPT ’19) and an idea due to Kohbrok (MLS Mailing List). We then show that the modified version of TreeKEM comes with almost no efficiency degradation but achieves optimal (according to MLS specification) CGKA security, including FS and PCS. Our work also lays out how a CGKA protocol can be used to design a full SGM protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_9](https://doi.org/10.1007/978-3-030-56784-2_9)
## Universally Composable Relaxed Password Authenticated Key Exchange.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#universally-composable-relaxed-password-authenticated-key-exchange)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#universally-composable-relaxed-password-authenticated-key-exchange)
### Authors
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, INRIA, Paris, France
* Manuel Barbosa, FCUP and INESC TEC, Porto, Portugal
* Tatiana Bradley, University of California, Irvine, USA
* Stanisław Jarecki, University of California, Irvine, USA
* Jonathan Katz, Department of Computer Science, George Mason University, Fairfax, USA
* Jiayu Xu, Department of Computer Science, George Mason University, Fairfax, USA
### Abstract
> Protocols for password authenticated key exchange (PAKE) allow two parties who share only a weak password to agree on a cryptographic key. We revisit the notion of PAKE in the universal composability (UC) framework, and propose a relaxation of the PAKE functionality of Canetti et al. that we call lazy-extraction PAKE (lePAKE). Our relaxation allows the ideal-world adversary to postpone its password guess until after a session is complete. We argue that this relaxed notion still provides meaningful security in the password-only setting. As our main result, we show that several PAKE protocols that were previously only proven secure with respect to a “game-based” definition of security can be shown to UC-realize the lePAKE functionality in the random-oracle model. These include SPEKE, SPAKE2, and TBPEKE, the most efficient PAKE schemes currently known.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_10](https://doi.org/10.1007/978-3-030-56784-2_10)
## Anonymous Tokens with Private Metadata Bit.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#anonymous-tokens-with-private-metadata-bit)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#anonymous-tokens-with-private-metadata-bit)
### Authors
* Ben Kreuter, Google, New York, USA
* Tancrède Lepoint, Google, New York, USA
* Mariana Raykova, Google, New York, USA
* Michele Orrù, École Normale Supérieure, CNRS, PSL University, Paris, France
* Michele Orrù, Inria, Paris, France
* Michele Orrù, Recurse Center, New York, USA
### Abstract
> We present a cryptographic construction for anonymous tokens with private metadata bit, called PMBTokens. This primitive enables an issuer to provide a user with a lightweight, single-use anonymous trust token that can embed a single private bit, which is accessible only to the party who holds the secret authority key and is private with respect to anyone else. Our construction generalizes and extends the functionality of Privacy Pass (PETS’18) with this private metadata bit capability. It provides unforgeability, unlinkability, and privacy for the metadata bit properties based on the DDH and CTDH assumptions in the random oracle model. Both Privacy Pass and PMBTokens rely on non-interactive zero-knowledge proofs (NIZKs). We present new techniques to remove the need for NIZKs, while still achieving unlinkability. We implement our constructions and we report their efficiency costs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_11](https://doi.org/10.1007/978-3-030-56784-2_11)
## Random Probing Security: Verification, Composition, Expansion and New Constructions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#random-probing-security-verification-composition-expansion-and-new-constructions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#random-probing-security-verification-composition-expansion-and-new-constructions)
### Authors
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Abdul Rahman Taleb, CryptoExperts, Paris, France
* Jean-Sébastien Coron, University of Luxembourg, Luxembourg, Luxembourg
* Emmanuel Prouff, ANSSI, Paris, France
### Abstract
> The masking countermeasure is among the most powerful countermeasures to counteract side-channel attacks. Leakage models have been exhibited to theoretically reason on the security of such masked implementations. So far, the most widely used leakage model is the probing model defined by Ishai, Sahai, and Wagner at (CRYPTO 2003). While it is advantageously convenient for security proofs, it does not capture an adversary exploiting full leakage traces as, e.g., in horizontal attacks. Those attacks target the multiple manipulations of the same share to reduce noise and recover the corresponding value. To capture a wider class of attacks another model was introduced and is referred to as the random probing model. From a leakage parameter p, each wire of the circuit leaks its value with probability p. While this model much better reflects the physical reality of side channels, it requires more complex security proofs and does not yet come with practical constructions.
> 
> In this paper, we define the first framework dedicated to the random probing model. We provide an automatic tool, called VRAPS, to quantify the random probing security of a circuit from its leakage probability. We also formalize a composition property for secure random probing gadgets and exhibit its relation to the strong non-interference (SNI) notion used in the context of probing security. We then revisit the expansion idea proposed by Ananth, Ishai, and Sahai (CRYPTO 2018) and introduce a compiler that builds a random probing secure circuit from small base gadgets achieving a random probing expandability property. We instantiate this compiler with small gadgets for which we verify the expected properties directly from our automatic tool. Our construction can tolerate a leakage probability up to \(2^{-8}\), against \(2^{-25}\) for the previous construction, with a better asymptotic complexity.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_12](https://doi.org/10.1007/978-3-030-56784-2_12)
## Mode-Level vs. Implementation-Level Physical Security in Symmetric Cryptography - A Practical Guide Through the Leakage-Resistance Jungle.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#mode-level-vs-implementation-level-physical-security-in-symmetric-cryptography-a-practical-guide-through-the-leakage-resistance-jungle)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#mode-level-vs-implementation-level-physical-security-in-symmetric-cryptography-a-practical-guide-through-the-leakage-resistance-jungle)
### Authors
* Davide Bellizia, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Olivier Bronchain, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Gaëtan Cassiers, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Charles Momin, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Olivier Pereira, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Thomas Peters, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Vincent Grosso, CNRS/Laboratoire Hubert Curien, Université de Lyon, Lyon, France
* Chun Guo, School of Cyber Science and Technology and Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
### Abstract
> Triggered by the increasing deployment of embedded cryptographic devices (e.g., for the IoT), the design of authentication, encryption and authenticated encryption schemes enabling improved security against side-channel attacks has become an important research direction. Over the last decade, a number of modes of operation have been proposed and analyzed under different abstractions. In this paper, we investigate the practical consequences of these findings. For this purpose, we first translate the physical assumptions of leakage-resistance proofs into minimum security requirements for implementers. Thanks to this (heuristic) translation, we observe that (i) security against physical attacks can be viewed as a tradeoff between mode-level and implementation-level protection mechanisms, and (ii) security requirements to guarantee confidentiality and integrity in front of leakage can be concretely different for the different parts of an implementation. We illustrate the first point by analyzing several modes of operation with gradually increased leakage-resistance. We illustrate the second point by exhibiting leveled implementations, where different parts of the investigated schemes have different security requirements against leakage, leading to performance improvements when high physical security is needed. We finally initiate a comparative discussion of the different solutions to instantiate the components of a leakage-resistant authenticated encryption scheme.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_13](https://doi.org/10.1007/978-3-030-56784-2_13)
## Leakage-Resilient Key Exchange and Two-Seed Extractors.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#leakage-resilient-key-exchange-and-two-seed-extractors)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#leakage-resilient-key-exchange-and-two-seed-extractors)
### Authors
* Xin Li, Johns Hopkins University, Baltimore, USA
* Fermi Ma, Princeton University, Princeton, USA
* Fermi Ma, NTT Research, Palo Alto, USA
* Daniel Wichs, NTT Research, Palo Alto, USA
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
### Abstract
> Can Alice and Bob agree on a uniformly random secret key without having any truly secret randomness to begin with? Here we consider a setting where Eve can get partial leakage on the internal state of both Alice and Bob individually before the protocol starts. They then run a protocol using their states without any additional randomness and need to agree on a shared key that looks uniform to Eve, even after observing the leakage and the protocol transcript. We focus on non-interactive (one round) key exchange (NIKE), where Alice and Bob send one message each without waiting for one another.
> 
> We first consider this problem in the symmetric-key setting, where the states of Alice and Bob include a shared secret as well as individual uniform randomness. However, since Eve gets leakage on these states, Alice and Bob need to perform privacy amplification to derive a fresh secret key from them. Prior solutions require Alice and Bob to sample fresh uniform randomness during the protocol, while in our setting all of their randomness was already part of their individual states a priori and was therefore subject to leakage. We show an information-theoretic solution to this problem using a novel primitive that we call a two-seed extractor, which we in turn construct by drawing a connection to communication-complexity lower-bounds in the number-on-forehead (NOF) model.
> 
> We then turn to studying this problem in the public-key setting, where the states of Alice and Bob consist of independent uniform randomness. Unfortunately, we give a black-box separation showing that leakage-resilient NIKE in this setting cannot be proven secure via a black-box reduction under any game-based assumption when the leakage is super-logarithmic. This includes virtually all assumptions used in cryptography, and even very strong assumptions such as indistinguishability obfuscation (\(\textit{i}\mathcal {O}\)). Nevertheless, we also provide positive results that get around the above separation:
> 
> We show that every key exchange protocol (e.g., Diffie-Hellman) is secure when the leakage amount is logarithmic, or potentially even greater if we assume sub-exponential security without leakage.
> 
> We notice that the black-box separation does not extend to schemes in the common reference string (CRS) model, or to schemes with preprocessing, where Alice and Bob can individually pre-process their random coins to derive their secret state prior to leakage. We give a solution in the CRS model with preprocessing using bilinear maps. We also give solutions in just the CRS model alone (without preprocessing) or just with preprocessing (without a CRS), using \(\textit{i}\mathcal {O}\) and lossy functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_14](https://doi.org/10.1007/978-3-030-56784-2_14)
## Lower Bounds for Encrypted Multi-Maps and Searchable Encryption in the Leakage Cell Probe Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#lower-bounds-for-encrypted-multi-maps-and-searchable-encryption-in-the-leakage-cell-probe-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#lower-bounds-for-encrypted-multi-maps-and-searchable-encryption-in-the-leakage-cell-probe-model)
### Authors
* Sarvar Patel, Google LLC, Mountain View, USA
* Giuseppe Persiano, Google LLC, Mountain View, USA
* Kevin Yeo, Google LLC, Mountain View, USA
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
### Abstract
> Encrypted multi-maps (EMMs) enable clients to outsource the storage of a multi-map to a potentially untrusted server while maintaining the ability to perform operations in a privacy-preserving manner. EMMs are an important primitive as they are an integral building block for many practical applications such as searchable encryption and encrypted databases. In this work, we formally examine the tradeoffs between privacy and efficiency for EMMs.
> 
> Currently, all known dynamic EMMs with constant overhead reveal if two operations are performed on the same key or not that we denote as the \( global\ key\text {-}equality\ pattern \). In our main result, we present strong evidence that the leakage of the global key-equality pattern is inherent for any dynamic EMM construction with O(1) efficiency. In particular, we consider the slightly smaller leakage of \( decoupled\ key\text {-}equality\ pattern \) where leakage of key-equality between update and query operations is decoupled and the adversary only learns whether two operations of the \( same\ type \) are performed on the same key or not. We show that any EMM with at most decoupled key-equality pattern leakage incurs \(\varOmega (\lg n)\) overhead in the \( leakage\ cell\ probe\ model \). This is tight as there exist ORAM-based constructions of EMMs with logarithmic slowdown that leak no more than the decoupled key-equality pattern (and actually, much less). Furthermore, we present stronger lower bounds that encrypted multi-maps leaking at most the decoupled key-equality pattern but are able to perform one of either the update or query operations in the plaintext still require \(\varOmega (\lg n)\) overhead. Finally, we extend our lower bounds to show that dynamic, \( response\text {-}hiding \) searchable encryption schemes must also incur \(\varOmega (\lg n)\) overhead even when one of either the document updates or searches may be performed in the plaintext.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_15](https://doi.org/10.1007/978-3-030-56784-2_15)
## Fast and Secure Updatable Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#fast-and-secure-updatable-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#fast-and-secure-updatable-encryption)
### Authors
* Colin Boyd, Norwegian University of Science and Technology, NTNU, Trondheim, Norway
* Kristian Gjøsteen, Norwegian University of Science and Technology, NTNU, Trondheim, Norway
* Yao Jiang, Norwegian University of Science and Technology, NTNU, Trondheim, Norway
* Gareth T. Davies, Bergische Universität Wuppertal, Wuppertal, Germany
### Abstract
> Updatable encryption allows a client to outsource ciphertexts to some untrusted server and periodically rotate the encryption key. The server can update ciphertexts from an old key to a new key with the help of an update token, received from the client, which should not reveal anything about plaintexts to an adversary.
> 
> We provide a new and highly efficient suite of updatable encryption schemes that we collectively call \(\mathsf {SHINE}\). In the variant designed for short messages, ciphertext generation consists of applying one permutation and one exponentiation (per message block), while updating ciphertexts requires just one exponentiation. Variants for longer messages provide much stronger security guarantees than prior work that has comparable efficiency. We present a new confidentiality notion for updatable encryption schemes that implies prior notions. We prove that \(\mathsf {SHINE}\) is secure under our new confidentiality definition while also providing ciphertext integrity.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_16](https://doi.org/10.1007/978-3-030-56784-2_16)
## Incompressible Encodings.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#incompressible-encodings)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#incompressible-encodings)
### Authors
* Tal Moran, IDC Herzliya, Herzliya, Israel
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research Inc., Palo Alto, USA
### Abstract
> An incompressible encoding can probabilistically encode some data m into a codeword c, which is not much larger. Anyone can decode the codeword c to recover the original data m. However, the codeword c cannot be efficiently compressed, even if the original data m is given to the decompression procedure on the side. In other words, c is an efficiently decodable representation of m, yet is computationally incompressible even given m. An incompressible encoding is composable if many encodings cannot be simultaneously compressed.
> 
> The recent work of Damgård, Ganesh and Orlandi (CRYPTO ’19) defined a variant of incompressible encodings as a building block for “proofs of replicated storage”. They constructed incompressible encodings in an ideal permutation model, but it was left open if they can be constructed under standard assumptions, or even in the more basic random-oracle model. In this work, we undertake the comprehensive study of incompressible encodings as a primitive of independent interest and give new constructions, negative results and applications:
> 
> We construct incompressible encodings in the common random string (CRS) model under either Decisional Composite Residuosity (DCR) or Learning with Errors (LWE). However, the construction has several drawbacks: (1) it is not composable, (2) it only achieves selective security, and (3) the CRS is as long as the data m.
> 
> We leverage the above construction to also get a scheme in the random-oracle model, under the same assumptions, that avoids all of the above drawbacks. Furthermore, it is significantly more efficient than the prior ideal-model construction.
> 
> We give black-box separations, showing that incompressible encodings in the plain model cannot be proven secure under any standard hardness assumption, and incompressible encodings in the CRS model must inherently suffer from all of the drawbacks above.
> 
> We give a new application to “big-key cryptography in the bounded-retrieval model”, where secret keys are made intentionally huge to make them hard to exfiltrate. Using incompressible encodings, we can get all the security benefits of a big key without wasting storage space, by having the key to encode useful data.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_17](https://doi.org/10.1007/978-3-030-56784-2_17)
## New Constructions of Hinting PRGs, OWFs with Encryption, and More.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#new-constructions-of-hinting-prgs-owfs-with-encryption-and-more)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#new-constructions-of-hinting-prgs-owfs-with-encryption-and-more)
### Authors
* Rishab Goyal, MIT, Cambridge, USA
* Satyanarayana Vusirikala, University of Texas at Austin, Austin, USA
* Brent Waters, University of Texas at Austin, Austin, USA
* Brent Waters, NTT Research, Palo Alto, USA
### Abstract
> Over the last few years, there has been a surge of new cryptographic results, including laconic oblivious transfer [13, 16], (anonymous/ hierarchical) identity-based encryption [9], trapdoor functions [19, 20], chosen-ciphertext security transformations [32, 33], designated-verifier zero-knowledge proofs [30, 34, 37], due to a beautiful framework recently introduced in the works of Cho et al. [13], and Döttling and Garg [14]. The primitive of one-way function with encryption (OWFE) [19, 20] and its relatives (chameleon encryption, one-time signatures with encryption, hinting PRGs, trapdoor hash encryption, batch encryption) [9, 14, 16, 17, 33] have been a centerpiece in all these results.
> 
> While there exist multiple realizations of OWFE (and its relatives) from a variety of assumptions such as CDH, Factoring, and LWE, all such constructions fall under the same general “missing block” framework [13, 14]. Although this framework has been instrumental in opening up a new pathway towards various cryptographic functionalities via the abstraction of OWFE (and its relatives), it has been accompanied by undesirable inefficiencies that might inhibit a much wider adoption in many practical scenarios. Motivated by the surging importance of the OWFE abstraction (and its relatives), a natural question to ask is whether the existing approaches can be diversified to not only obtain more constructions from different assumptions, but also in developing newer frameworks. We believe answering this question will eventually lead to important and previously unexplored performance trade-offs in the overarching applications of this novel cryptographic paradigm.
> 
> In this work, we propose a new accumulation-style framework for building a new class of OWFE as well as hinting PRG constructions with a special focus on achieving shorter ciphertext size and shorter public parameter size (respectively). Such performance improvements parlay into shorter parameters in their corresponding applications. Briefly, we explore the following performance trade-offs—(1) for OWFE, our constructions outperform in terms of ciphertext size as well as encryption time, but this comes at the cost of larger evaluation and setup times, (2) for hinting PRGs, our constructions provide a rather dramatic trade-off between evaluation time versus parameter size, with our construction leading to significantly shorter public parameter size. The trade-off enabled by our hinting PRG construction also leads to interesting implications in the CPA-to-CCA transformation provided in [33]. We also provide concrete performance measurements for our constructions and compare them with existing approaches. We believe highlighting such trade-offs will lead to a wider adoption of these abstractions in a practical sense.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_18](https://doi.org/10.1007/978-3-030-56784-2_18)
## Adaptively Secure Constrained Pseudorandom Functions in the Standard Model.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#adaptively-secure-constrained-pseudorandom-functions-in-the-standard-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#adaptively-secure-constrained-pseudorandom-functions-in-the-standard-model)
### Authors
* Alex Davidson, Cloudflare, Lisbon, Portugal
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Alex Davidson, ISG, Royal Holloway University of London, London, UK
### Abstract
> Constrained pseudorandom functions (CPRFs) allow learning “constrained” PRF keys that can evaluate the PRF on a subset of the input space, or based on some predicate. First introduced by Boneh and Waters [AC’13], Kiayias et al. [CCS’13] and Boyle et al. [PKC’14], they have shown to be a useful cryptographic primitive with many applications. These applications often require CPRFs to be adaptively secure, which allows the adversary to learn PRF values and constrained keys in an arbitrary order. However, there is no known construction of adaptively secure CPRFs based on a standard assumption in the standard model for any non-trivial class of predicates. Moreover, even if we rely on strong tools such as indistinguishability obfuscation (IO), the state-of-the-art construction of adaptively secure CPRFs in the standard model only supports the limited class of \(\mathbf{NC} ^1\) predicates.
> 
> In this work, we develop new adaptively secure CPRFs for various predicates from different types of assumptions in the standard model. Our results are summarized below.
> 
> We construct adaptively secure and O(1)-collusion-resistant CPRFs for t-conjunctive normal form (t-CNF) predicates from one-way functions (OWFs) where t is a constant. Here, O(1)-collusion-resistance means that we can allow the adversary to obtain a constant number of constrained keys. Note that t-CNF includes bit-fixing predicates as a special case.
> 
> We construct adaptively secure and single-key CPRFs for inner-product predicates from the learning with errors (LWE) assumption. Here, single-key security means that we only allow the adversary to learn one constrained key. Note that inner-product predicates include t-CNF predicates for a constant t as a special case. Thus, this construction supports more expressive class of predicates than that supported by the first construction though it loses the collusion-resistance and relies on a stronger assumption.
> 
> We construct adaptively secure and O(1)-collusion-resistant CPRFs for all circuits from the LWE assumption and indistinguishability obfuscation (IO).
> 
> The first and second constructions are the first CPRFs for any non-trivial predicates to achieve adaptive security outside of the random oracle model or relying on strong cryptographic assumptions. Moreover, the first construction is also the first to achieve any notion of collusion-resistance in this setting. Besides, we prove that the first and second constructions satisfy weak 1-key privacy, which roughly means that a constrained key does not reveal the corresponding constraint. The third construction is an improvement over previous adaptively secure CPRFs for less expressive predicates based on IO in the standard model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_19](https://doi.org/10.1007/978-3-030-56784-2_19)
## Collusion Resistant Watermarkable PRFs from Standard Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#collusion-resistant-watermarkable-prfs-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#collusion-resistant-watermarkable-prfs-from-standard-assumptions)
### Authors
* Rupeng Yang, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Man Ho Au, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Zuoxia Yu, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Qiuliang Xu, School of Software, Shandong University, Jinan, 250101, China
### Abstract
> A software watermarking scheme can embed a message into a program without significantly changing its functionality. Moreover, any attempt to remove the embedded message in a marked program will substantially change the functionality of the program. Prior constructions of watermarking schemes focus on watermarking cryptographic functions, such as pseudorandom function (PRF), public key encryption, etc.
> 
> A natural security requirement for watermarking schemes is collusion resistance, where the adversary’s goal is to remove the embedded messages given multiple marked versions of the same program. Currently, this strong security guarantee has been achieved by watermarking schemes for public key cryptographic primitives from standard assumptions (Goyal et al., CRYPTO 2019) and by watermarking schemes for PRFs from indistinguishability obfuscation (Yang et al., ASIACRYPT 2019). However, no collusion resistant watermarking scheme for PRF from standard assumption is known.
> 
> In this work, we solve this problem by presenting a generic construction that upgrades a watermarkable PRF without collusion resistance to a collusion resistant one. One appealing feature of our construction is that it can preserve the security properties of the original scheme. For example, if the original scheme has security with extraction queries, the new scheme is also secure with extraction queries. Besides, the new scheme can achieve unforgeability even if the original scheme does not provide this security property. Instantiating our construction with existing watermarking schemes for PRF, we obtain collusion resistant watermarkable PRFs from standard assumptions, offering various security properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_20](https://doi.org/10.1007/978-3-030-56784-2_20)
## Verifiable Registration-Based Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#verifiable-registration-based-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#verifiable-registration-based-encryption)
### Authors
* Rishab Goyal, MIT, Cambridge, USA
* Satyanarayana Vusirikala, UT Austin, Austin, USA
### Abstract
> In recent work, Garg, Hajiabadi, Mahmoody, and Rahimi [18] introduced a new encryption framework, which they referred to as Registration-Based Encryption (RBE). The central motivation behind RBE was to provide a novel methodology for solving the well-known key-escrow problem in Identity-Based Encryption (IBE) systems [33]. Informally, in an RBE system, there is no private-key generator unlike IBE systems, but instead, it is replaced with a public key accumulator. Every user in an RBE system samples its own public-secret key pair and sends the public key to the accumulator for registration. The key accumulator has no secret state and is only responsible for compressing all the registered user identity-key pairs into a short public commitment. Here the encryptor only requires the compressed parameters along with the target identity, whereas a decryptor requires supplementary key material along with the secret key associated with the registered public key.
> 
> The initial construction in [18] based on standard assumptions only provided weak efficiency properties. In a follow-up work by Garg, Hajiabadi, Mahmoody, Rahimi, and Sekar [19], they gave an efficient RBE construction from standard assumptions. However, both these works considered the key accumulator to be honest which might be too strong an assumption in real-world scenarios. In this work, we initiate a formal study of RBE systems with malicious key accumulators. To that end, we introduce a strengthening of the RBE framework which we call Verifiable RBE (VRBE). A VRBE system additionally gives the users an extra capability to obtain short proofs from the key accumulator proving correct (and unique) registration for every registered user as well as proving non-registration for any yet unregistered identity.
> 
> We construct VRBE systems that provide succinct proofs of registration and non-registration from standard assumptions (such as CDH, Factoring, LWE). Our proof systems also naturally allow a much more efficient audit process which can be performed by any non-participating third party as well. A by-product of our approach is that we provide a more efficient RBE construction than that provided in the prior work of Garg et al. [19]. And lastly, we initiate a study on the extension of VRBE to a wider range of access and trust structures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_21](https://doi.org/10.1007/978-3-030-56784-2_21)
## New Techniques for Traitor Tracing: Size N1/3 and More from Pairings.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#new-techniques-for-traitor-tracing-size-n1-3-and-more-from-pairings)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#new-techniques-for-traitor-tracing-size-n1-3-and-more-from-pairings)
### Authors
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Palo Alto, USA
### Abstract
> The best existing pairing-based traitor tracing schemes have \(O(\sqrt{N})\)-sized parameters, which has stood since 2006. This intuitively seems to be consistent with the fact that pairings allow for degree-2 computations, yielding a quadratic compression.
> 
> In this work, we show that this intuition is false by building a traitor tracing scheme from pairings with \(O(\root 3 \of {N})\)-sized parameters. We additionally give schemes with a variety of parameter size trade-offs, including a scheme with constant-size ciphertexts and public keys (but linear-sized secret keys). We obtain our schemes by developing a number of new traitor tracing techniques, giving the first significant parameter improvements in pairings-based traitor tracing in over a decade.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_22](https://doi.org/10.1007/978-3-030-56784-2_22)
## Functional Encryption for Attribute-Weighted Sums from k-Lin.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#functional-encryption-for-attribute-weighted-sums-from-k-lin)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#functional-encryption-for-attribute-weighted-sums-from-k-lin)
### Authors
* Michel Abdalla, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
* Junqing Gong, East China Normal University, Shanghai, China
* Hoeteck Wee, NTT Research, Palo Alto, CA, USA
### Abstract
> We present functional encryption schemes for attribute-weighted sums, where encryption takes as input N attribute-value pairs \((x_i,z_i)\) where \(x_i\) is public and \(z_i\) is private; secret keys are associated with arithmetic branching programs f, and decryption returns the weighted sum \(\sum _{i=1}^N f(x_i) z_i\) while leaking no additional information about the \(z_i\)’s. Our main construction achieves
> 
> (1) compact public parameters and key sizes that are independent of N and the secret key can decrypt a ciphertext for any a-priori unbounded N;
> 
> (2) short ciphertexts that grow with N and the size of \(z_i\) but not \(x_i\);
> 
> (3) simulation-based security against unbounded collusions;
> 
> (4) relies on the standard k-linear assumption in prime-order bilinear groups.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_23](https://doi.org/10.1007/978-3-030-56784-2_23)
## Amplifying the Security of Functional Encryption, Unconditionally.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#amplifying-the-security-of-functional-encryption-unconditionally)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#amplifying-the-security-of-functional-encryption-unconditionally)
### Authors
* Aayush Jain, UCLA, Los Angeles, CA, USA
* Alexis Korb, UCLA, Los Angeles, CA, USA
* Nathan Manohar, UCLA, Los Angeles, CA, USA
* Amit Sahai, UCLA, Los Angeles, CA, USA
### Abstract
> Security amplification is a fundamental problem in cryptography. In this work, we study security amplification for functional encryption (FE). We show two main results:
> 
> For any constant \(\epsilon \in (0,1)\), we can amplify any FE scheme for \(\mathsf {P/poly}\) which is \(\epsilon \)-secure against all polynomial sized adversaries to a fully secure FE scheme for \(\mathsf {P/poly}\), unconditionally.
> 
> For any constant \(\epsilon \in (0,1)\), we can amplify any FE scheme for \(\mathsf {P/poly}\) which is \(\epsilon \)-secure against subexponential sized adversaries to a fully subexponentially secure FE scheme for \(\mathsf {P/poly}\), unconditionally.
> 
> Furthermore, both of our amplification results preserve compactness of the underlying FE scheme. Previously, amplification results for FE were only known assuming subexponentially secure LWE.
> 
> Along the way, we introduce a new form of homomorphic secret sharing called set homomorphic secret sharing that may be of independent interest. Additionally, we introduce a new technique, which allows one to argue security amplification of nested primitives, and prove a general theorem that can be used to analyze the security amplification of parallel repetitions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_24](https://doi.org/10.1007/978-3-030-56784-2_24)
## Dynamic Decentralized Functional Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#dynamic-decentralized-functional-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#dynamic-decentralized-functional-encryption)
### Authors
* Jérémy Chotard, XLIM, University of Limoges, CNRS, Limoges, France
* Duong Hieu Phan, XLIM, University of Limoges, CNRS, Limoges, France
* Jérémy Chotard, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* Edouard Dufour-Sans, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* David Pointcheval, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* Jérémy Chotard, Inria, Paris, France
* Edouard Dufour-Sans, Inria, Paris, France
* David Pointcheval, Inria, Paris, France
* Edouard Dufour-Sans, Carnegie Mellon University, Pittsburgh, USA
* Romain Gay, Cornell Tech, New York, USA
### Abstract
> We introduce Dynamic Decentralized Functional Encryption (\(\textsf {DDFE}\)), a generalization of Functional Encryption which allows multiple users to join the system dynamically, without relying on a trusted third party or on expensive and interactive Multi-Party Computation protocols.
> 
> This notion subsumes existing multi-user extensions of Functional Encryption, such as Multi-Input, Multi-Client, and Ad Hoc Multi-Input Functional Encryption.
> 
> We define and construct schemes for various functionalities which serve as building-blocks for latter primitives and may be useful in their own right, such as a scheme for dynamically computing sums in any Abelian group. These constructions build upon simple primitives in a modular way, and have instantiations from well-studied assumptions, such as DDH or LWE.
> 
> Our constructions culminate in an Inner-Product scheme for computing weighted sums on aggregated encrypted data, from standard assumptions in prime-order groups in the Random Oracle Model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_25](https://doi.org/10.1007/978-3-030-56784-2_25)
## On Succinct Arguments and Witness Encryption from Groups.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#on-succinct-arguments-and-witness-encryption-from-groups)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#on-succinct-arguments-and-witness-encryption-from-groups)
### Authors
* Ohad Barta, Technion, Haifa, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Rafail Ostrovsky, UCLA, Los Angeles, CA, USA
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### Abstract
> Succinct non-interactive arguments (SNARGs) enable proofs of \(\mathsf {NP} \) statements with very low communication. Recently, there has been significant work in both theory and practice on constructing SNARGs with very short proofs. Currently, the state-of-the-art in succinctness is due to Groth (Eurocrypt 2016) who constructed a SNARG from bilinear maps where the proof consists of just 3 group elements.
> 
> In this work, we first construct a concretely-efficient designated-verifier (preprocessing) SNARG with inverse polynomial soundness, where the proof consists of just 2 group elements in a standard (generic) group. This leads to a 50% reduction in concrete proof size compared to Groth’s construction. We follow the approach of Bitansky et al. (TCC 2013) who describe a compiler from linear PCPs to SNARGs in the preprocessing model. Our improvement is based on a new linear PCP packing technique that allows us to construct 1-query linear PCPs which can then be compiled into a SNARG (using ElGamal encryption over a generic group). An appealing feature of our new SNARG is that the verifier can precompute a statement-independent lookup table in an offline phase; verifying proofs then only requires 2 exponentiations and a single table lookup. This makes our new designated-verifier SNARG appealing in settings that demand fast verification and minimal communication.
> 
> We then turn to the question of constructing arguments where the proof consists of a single group element. Here, we first show that any (possibly interactive) argument for a language \(\mathcal {L}\) where the verification algorithm is “generic” (i.e., only performs generic group operations) and the proof consists of a single group element, implies a witness encryption scheme for \(\mathcal {L}\). We then show that under a yet-unproven, but highly plausible, hypothesis on the hardness of approximating the minimal distance of linear codes, we can construct a 2-message laconic argument for \(\mathsf {NP} \) where the proof consists of a single group element. Under the same hypothesis, we obtain a witness encryption scheme for \(\mathsf {NP} \) in the generic group model. Along the way, we show that under a conceptually-similar but proven hardness of approximation result, there is a 2-message laconic argument for \(\mathsf {NP} \) with negligible soundness error where the prover’s message consists of just 2 group elements. In both settings, we obtain laconic arguments (and linear PCPs) with linear decision procedures. Our constructions circumvent a previous lower bound by Groth on such argument systems with linear decision procedures by relying on imperfect completeness. Namely, our constructions have vanishing but not negligible completeness error, while the lower bound of Groth implicitly assumes negligible completeness error of the underlying argument. Our techniques thus highlight new avenues for designing linear PCPs, succinct arguments, and witness encryption schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_26](https://doi.org/10.1007/978-3-030-56784-2_26)
## Fully Deniable Interactive Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#fully-deniable-interactive-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#fully-deniable-interactive-encryption)
### Authors
* Ran Canetti, Boston University, Boston, USA
* Sunoo Park, MIT and Harvard, Cambridge, USA
* Oxana Poburinnaya, University of Rochester, Rochester, USA
### Abstract
> Deniable encryption (Canetti et al., Crypto 1996) enhances secret communication over public channels, providing the additional guarantee that the secrecy of communication is protected even if the parties are later coerced (or willingly bribed) to expose their entire internal states: plaintexts, keys and randomness. To date, constructions of deniable encryption—and more generally, interactive deniable communication—only address restricted cases where only one party is compromised (Sahai and Waters, STOC 2014). The main question—whether deniable communication is at all possible if both parties are coerced at once—has remained open.
> 
> We resolve this question in the affirmative, presenting a communication protocol that is fully deniable under coercion of both parties. Our scheme has three rounds, assumes subexponentially secure indistinguishability obfuscation and one-way functions, and uses a short global reference string that is generated once at system set-up and suffices for an unbounded number of encryptions and decryptions.
> 
> Of independent interest, we introduce a new notion called off-the-record deniability, which protects parties even when their claimed internal states are inconsistent (a case not covered by prior definitions). Our scheme satisfies both standard deniability and off-the-record deniability.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_27](https://doi.org/10.1007/978-3-030-56784-2_27)
## Chosen Ciphertext Security from Injective Trapdoor Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2020-1].md#chosen-ciphertext-security-from-injective-trapdoor-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#chosen-ciphertext-security-from-injective-trapdoor-functions)
### Authors
* Susan Hohenberger, Johns Hopkins University, Baltimore, MD, USA
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Brent Waters, University of Texas, Austin, TX, USA
* Brent Waters, NTT Research, Palo Alto, CA, USA
### Abstract
> We provide a construction of chosen ciphertext secure public-key encryption from (injective) trapdoor functions. Our construction is black box and assumes no special properties (e.g. “lossy”, “correlated product secure”) of the trapdoor function.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_28](https://doi.org/10.1007/978-3-030-56784-2_28)
